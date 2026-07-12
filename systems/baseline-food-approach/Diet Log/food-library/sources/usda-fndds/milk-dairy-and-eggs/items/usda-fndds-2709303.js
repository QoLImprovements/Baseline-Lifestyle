/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, including citrus fruit, with whipped cream",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 14.6,
    "energy_kcal": 158.0,
    "fat_g": 10.4,
    "fibre_g": 2.0,
    "folate_ug": 21.0,
    "iron_mg": 0.27,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 52.0,
    "potassium_mg": 216.0,
    "protein_g": 2.08,
    "salt_g": 0.0075,
    "sat_fat_g": 2.94,
    "sodium_mg": 3.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 18.1,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709303",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "milk-dairy-and-eggs",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
