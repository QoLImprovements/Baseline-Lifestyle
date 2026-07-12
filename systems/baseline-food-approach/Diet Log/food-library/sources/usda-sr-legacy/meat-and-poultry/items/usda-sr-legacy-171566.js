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
  "id": "usda-sr-legacy-171566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 273.0,
      "key": "jar-10-5-oz",
      "kind": "unit",
      "label": "jar 10.5 oz"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "jar-12-oz",
      "kind": "unit",
      "label": "jar 12 oz"
    }
  ],
  "name": "Gravy, chicken, canned or bottled, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 5.29,
    "energy_kcal": 199.0,
    "fat_g": 2.62,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.09,
    "magnesium_mg": 3.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 20.0,
    "potassium_mg": 42.0,
    "protein_g": 0.71,
    "salt_g": 0.9725,
    "sat_fat_g": 0.639,
    "sodium_mg": 389.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171566",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
