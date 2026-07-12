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
  "id": "usda-sr-legacy-173310",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "McDONALD'S, Hotcakes and Sausage",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 37.6,
    "energy_kcal": 1230.0,
    "fat_g": 12.5,
    "fibre_g": 1.6,
    "folate_ug": 54.0,
    "iron_mg": 1.41,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 148.0,
    "protein_g": 7.81,
    "salt_g": 1.21,
    "sat_fat_g": 3.65,
    "sodium_mg": 484.0,
    "sugar_g": 7.29,
    "vitamin_a_ug": 202.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173310",
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
