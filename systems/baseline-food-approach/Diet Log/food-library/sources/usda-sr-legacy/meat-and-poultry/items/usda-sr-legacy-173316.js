/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173316",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, CROISSAN'WICH with Sausage and Cheese",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 23.0,
    "energy_kcal": 376.0,
    "fat_g": 25.4,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 1.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 158.0,
    "potassium_mg": 205.0,
    "protein_g": 13.7,
    "salt_g": 1.955,
    "sat_fat_g": 8.6,
    "sodium_mg": 782.0,
    "sugar_g": 3.36,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173316",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
