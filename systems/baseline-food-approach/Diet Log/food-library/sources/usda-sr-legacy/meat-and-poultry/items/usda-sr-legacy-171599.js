/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-4-cup-2-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving-1-4-cup-2-oz",
      "kind": "unit",
      "label": "serving 1/4 cup 2 oz"
    }
  ],
  "name": "Gravy, HEINZ Home Style, savory beef",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.24,
    "energy_kcal": 165.0,
    "fat_g": 1.13,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.13,
    "magnesium_mg": 3.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 10.0,
    "potassium_mg": 22.0,
    "protein_g": 1.09,
    "salt_g": 1.4675,
    "sat_fat_g": 0.4,
    "sodium_mg": 587.0,
    "sugar_g": 0.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171599",
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
