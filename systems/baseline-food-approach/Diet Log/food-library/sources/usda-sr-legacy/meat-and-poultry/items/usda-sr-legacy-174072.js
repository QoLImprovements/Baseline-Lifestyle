/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-25-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "jar-12-oz",
      "kind": "unit",
      "label": "jar 12 oz"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Gravy, HEINZ Home Style, classic chicken",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 5.01,
    "energy_kcal": 46.0,
    "fat_g": 2.57,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 3.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 22.0,
    "potassium_mg": 35.0,
    "protein_g": 0.67,
    "salt_g": 0.93,
    "sat_fat_g": 0.656,
    "sodium_mg": 372.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174072",
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
