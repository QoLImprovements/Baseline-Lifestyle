/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "packet",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171614",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "package-without-flavor-packet",
      "kind": "unit",
      "label": "package without flavor packet"
    }
  ],
  "name": "Soup, ramen noodle, beef flavor, dry",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 60.3,
    "energy_kcal": 441.0,
    "fat_g": 17.7,
    "fibre_g": 3.0,
    "folate_ug": 111.0,
    "iron_mg": 3.93,
    "magnesium_mg": 25.0,
    "omega3_g": 0.055,
    "phosphorus_mg": 115.0,
    "potassium_mg": 177.0,
    "protein_g": 10.1,
    "salt_g": 4.325,
    "sat_fat_g": 8.16,
    "sodium_mg": 1730.0,
    "sugar_g": 1.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 2.49,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171614",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
