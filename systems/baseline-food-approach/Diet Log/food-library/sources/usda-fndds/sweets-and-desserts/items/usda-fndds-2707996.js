/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "1-mcdonald-s-pie",
      "kind": "unit",
      "label": "1 McDonald's pie"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-tart",
      "kind": "unit",
      "label": "1 tart"
    }
  ],
  "name": "Pie, apple, fast food",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 42.6,
    "energy_kcal": 316.0,
    "fat_g": 16.1,
    "fibre_g": 2.6,
    "folate_ug": 18.0,
    "iron_mg": 1.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 65.0,
    "protein_g": 3.0,
    "salt_g": 0.8325,
    "sat_fat_g": 2.46,
    "sodium_mg": 333.0,
    "sugar_g": 21.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707996",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
