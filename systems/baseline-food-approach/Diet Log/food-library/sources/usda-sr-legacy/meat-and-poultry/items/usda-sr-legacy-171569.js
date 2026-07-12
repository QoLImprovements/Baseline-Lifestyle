/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Gravy, turkey, dry",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 65.1,
    "energy_kcal": 1540.0,
    "fat_g": 7.19,
    "fibre_g": 0.0,
    "folate_ug": 82.0,
    "iron_mg": 3.29,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 254.0,
    "potassium_mg": 428.0,
    "protein_g": 10.4,
    "salt_g": 10.975,
    "sat_fat_g": 1.98,
    "sodium_mg": 4390.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171569",
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
