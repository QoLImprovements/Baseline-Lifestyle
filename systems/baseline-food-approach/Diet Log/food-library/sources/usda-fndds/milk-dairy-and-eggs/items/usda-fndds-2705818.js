/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2705818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mozzarella cheese, tomato, and basil, with oil and vinegar dressing",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 3.86,
    "energy_kcal": 139.0,
    "fat_g": 10.9,
    "fibre_g": 0.8,
    "folate_ug": 18.0,
    "iron_mg": 0.31,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 163.0,
    "potassium_mg": 182.0,
    "protein_g": 7.17,
    "salt_g": 0.5225,
    "sat_fat_g": 4.18,
    "sodium_mg": 209.0,
    "sugar_g": 2.32,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 27.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705818",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
