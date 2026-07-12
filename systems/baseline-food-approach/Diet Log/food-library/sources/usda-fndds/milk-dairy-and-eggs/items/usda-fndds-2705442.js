/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-bottle",
  "description": "Yogurt, regular",
  "id": "usda-fndds-2705442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-bottle",
      "kind": "unit",
      "label": "1 bottle"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Yogurt, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 12.6,
    "energy_kcal": 74.0,
    "fat_g": 1.07,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 0.11,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 170.0,
    "protein_g": 3.65,
    "salt_g": 0.1325,
    "sat_fat_g": 0.689,
    "sodium_mg": 53.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705442",
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
