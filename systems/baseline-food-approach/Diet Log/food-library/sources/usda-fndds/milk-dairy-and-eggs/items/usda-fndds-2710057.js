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
  "id": "usda-fndds-2710057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 214.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pea salad with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 9.82,
    "energy_kcal": 203.0,
    "fat_g": 16.0,
    "fibre_g": 2.4,
    "folate_ug": 37.0,
    "iron_mg": 0.79,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 90.0,
    "potassium_mg": 114.0,
    "protein_g": 5.0,
    "salt_g": 0.7325,
    "sat_fat_g": 3.9,
    "sodium_mg": 293.0,
    "sugar_g": 4.44,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 47.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710057",
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
