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
  "id": "usda-fndds-2705443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-tube",
      "kind": "unit",
      "label": "1 tube"
    }
  ],
  "name": "Yogurt tube",
  "nutritionPerBasis": {
    "calcium_mg": 156.0,
    "carbs_g": 13.7,
    "energy_kcal": 81.0,
    "fat_g": 1.03,
    "fibre_g": 0.1,
    "folate_ug": 11.0,
    "iron_mg": 0.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 204.0,
    "protein_g": 4.34,
    "salt_g": 0.15,
    "sat_fat_g": 0.671,
    "sodium_mg": 60.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705443",
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
