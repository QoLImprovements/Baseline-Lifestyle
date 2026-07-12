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
  "id": "usda-fndds-2709218",
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
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Applesauce, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 18.0,
    "energy_kcal": 75.0,
    "fat_g": 0.17,
    "fibre_g": 1.0,
    "folate_ug": 3.0,
    "iron_mg": 0.04,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 101.0,
    "protein_g": 0.25,
    "salt_g": 0.0025,
    "sat_fat_g": 0.007,
    "sodium_mg": 1.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 40.8,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709218",
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
