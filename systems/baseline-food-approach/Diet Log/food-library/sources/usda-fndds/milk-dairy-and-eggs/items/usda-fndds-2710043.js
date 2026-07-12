/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-chili",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2710043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-chili",
      "kind": "unit",
      "label": "1 chili"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chiles rellenos, cheese-filled",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 10.4,
    "energy_kcal": 228.0,
    "fat_g": 17.2,
    "fibre_g": 0.7,
    "folate_ug": 28.0,
    "iron_mg": 0.67,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 148.0,
    "potassium_mg": 119.0,
    "protein_g": 7.84,
    "salt_g": 1.1125,
    "sat_fat_g": 6.1,
    "sodium_mg": 445.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 39.9,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710043",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
