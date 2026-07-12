/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-matzo",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-matzo",
      "kind": "unit",
      "label": "1 matzo"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, matzo",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 83.7,
    "energy_kcal": 395.0,
    "fat_g": 1.4,
    "fibre_g": 3.0,
    "folate_ug": 17.0,
    "iron_mg": 3.16,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 112.0,
    "protein_g": 10.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.226,
    "sodium_mg": 0.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708158",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
