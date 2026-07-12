/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 527.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "CAMPBELL'S CHUNKY, Hearty Beef Barley Soup",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 8.98,
    "energy_kcal": 56.0,
    "fat_g": 0.92,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 0.49,
    "magnesium_mg": 10.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 55.0,
    "potassium_mg": 129.0,
    "protein_g": 2.89,
    "salt_g": 0.77,
    "sat_fat_g": 0.377,
    "sodium_mg": 308.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174552",
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
