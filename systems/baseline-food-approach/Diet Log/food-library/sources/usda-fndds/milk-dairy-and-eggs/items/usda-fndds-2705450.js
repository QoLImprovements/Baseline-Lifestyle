/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yogurt, regular",
  "id": "usda-fndds-2705450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-mcdonald-s-parfait",
      "kind": "unit",
      "label": "1 McDonald's parfait"
    }
  ],
  "name": "Yogurt parfait, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 16.1,
    "energy_kcal": 104.0,
    "fat_g": 2.18,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.43,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 170.0,
    "protein_g": 5.25,
    "salt_g": 0.11,
    "sat_fat_g": 0.608,
    "sodium_mg": 44.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 13.5,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705450",
  "state": "Unspecified",
  "subcategory": "Yogurt, regular",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "yogurt-regular"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
