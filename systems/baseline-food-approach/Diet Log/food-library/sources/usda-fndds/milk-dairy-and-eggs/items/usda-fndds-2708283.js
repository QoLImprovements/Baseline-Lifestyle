/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-medium-regular",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708283",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pretzels, soft, from frozen, topped with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 62.4,
    "energy_kcal": 339.0,
    "fat_g": 5.36,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 3.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 138.0,
    "potassium_mg": 92.0,
    "protein_g": 10.2,
    "salt_g": 0.775,
    "sat_fat_g": 2.13,
    "sodium_mg": 310.0,
    "sugar_g": 0.45,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708283",
  "state": "Frozen",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "pretzels-snack-mix"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
