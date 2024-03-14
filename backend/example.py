from matplotlib import pyplot as plt

def get_plot():
    labels = ['A', 'B', 'C', 'D']
    values = [10, 20, 30, 40]
    plt.plot(labels, values)
    return plt

def save_plot_as_image(file_name, plt):
    plt.savefig("./images/" + file_name)