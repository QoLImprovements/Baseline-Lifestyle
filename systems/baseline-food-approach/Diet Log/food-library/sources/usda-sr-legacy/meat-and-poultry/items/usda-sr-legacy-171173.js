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
  "id": "usda-sr-legacy-171173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Gravy, pork, dry, powder",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 63.6,
    "energy_kcal": 367.0,
    "fat_g": 8.63,
    "fibre_g": 2.4,
    "folate_ug": 31.0,
    "iron_mg": 3.94,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 235.0,
    "protein_g": 8.78,
    "salt_g": 13.4,
    "sat_fat_g": 4.29,
    "sodium_mg": 5360.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171173",
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
