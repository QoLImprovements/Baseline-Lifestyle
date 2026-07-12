/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-pouch",
  "description": "Apples",
  "id": "usda-fndds-2709217",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Applesauce, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.3,
    "energy_kcal": 52.0,
    "fat_g": 0.16,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.04,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 108.0,
    "protein_g": 0.27,
    "salt_g": 0.0025,
    "sat_fat_g": 0.008,
    "sodium_mg": 1.0,
    "sugar_g": 9.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 43.7,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709217",
  "state": "Unspecified",
  "subcategory": "Apples",
  "tags": [
    "apples",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
