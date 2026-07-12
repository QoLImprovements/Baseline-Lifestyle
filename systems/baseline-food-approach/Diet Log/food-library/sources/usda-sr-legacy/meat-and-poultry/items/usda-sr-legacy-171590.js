/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-16-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "package-16-oz",
      "kind": "unit",
      "label": "package (16 oz)"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Gravy, instant turkey, dry",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 57.6,
    "energy_kcal": 409.0,
    "fat_g": 14.7,
    "fibre_g": 3.8,
    "folate_ug": 45.0,
    "iron_mg": 9.57,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 306.0,
    "protein_g": 11.7,
    "salt_g": 10.225,
    "sat_fat_g": 4.93,
    "sodium_mg": 4090.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171590",
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
