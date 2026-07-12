/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, croissant, with egg, cheese, and sausage",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 15.9,
    "energy_kcal": 1290.0,
    "fat_g": 21.8,
    "fibre_g": 1.8,
    "folate_ug": 50.0,
    "iron_mg": 1.65,
    "magnesium_mg": 17.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 138.0,
    "potassium_mg": 158.0,
    "protein_g": 12.1,
    "salt_g": 1.4425,
    "sat_fat_g": 8.34,
    "sodium_mg": 577.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173271",
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
