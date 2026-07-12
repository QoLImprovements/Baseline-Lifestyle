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
  "id": "usda-sr-legacy-171589",
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
  "name": "Gravy, instant beef, dry",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 61.1,
    "energy_kcal": 369.0,
    "fat_g": 9.48,
    "fibre_g": 4.3,
    "folate_ug": 34.0,
    "iron_mg": 6.27,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 450.0,
    "protein_g": 9.8,
    "salt_g": 13.0,
    "sat_fat_g": 4.88,
    "sodium_mg": 5200.0,
    "sugar_g": 23.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171589",
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
