/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Light ice cream bar, vanilla, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 19.2,
    "energy_kcal": 236.0,
    "fat_g": 16.6,
    "fibre_g": 0.5,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 72.0,
    "potassium_mg": 163.0,
    "protein_g": 3.39,
    "salt_g": 0.1575,
    "sat_fat_g": 13.0,
    "sodium_mg": 63.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705671",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
