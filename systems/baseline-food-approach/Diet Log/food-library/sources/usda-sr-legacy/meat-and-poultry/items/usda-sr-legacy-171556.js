/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "CAMPBELL'S, Chicken Noodle Soup, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.97,
    "energy_kcal": 47.0,
    "fat_g": 1.53,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.69,
    "magnesium_mg": 8.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 38.0,
    "potassium_mg": 44.0,
    "protein_g": 2.37,
    "salt_g": 1.7075,
    "sat_fat_g": 0.388,
    "sodium_mg": 683.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171556",
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
