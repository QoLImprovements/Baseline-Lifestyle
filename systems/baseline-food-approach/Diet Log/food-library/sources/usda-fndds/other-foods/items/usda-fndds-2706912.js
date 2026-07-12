/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    }
  ],
  "name": "Double cheeseburger, from fast food, 2 small patties",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 17.7,
    "energy_kcal": 297.0,
    "fat_g": 16.6,
    "fibre_g": 0.6,
    "folate_ug": 45.0,
    "iron_mg": 2.48,
    "magnesium_mg": 22.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 204.0,
    "potassium_mg": 221.0,
    "protein_g": 18.1,
    "salt_g": 1.1175,
    "sat_fat_g": 7.12,
    "sodium_mg": 447.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706912",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
