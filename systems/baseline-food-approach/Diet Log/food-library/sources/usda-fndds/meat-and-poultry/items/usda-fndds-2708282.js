/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-regular",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708282",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    }
  ],
  "name": "Pretzels, soft, from frozen, topped with meat",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 53.4,
    "energy_kcal": 349.0,
    "fat_g": 9.93,
    "fibre_g": 1.3,
    "folate_ug": 21.0,
    "iron_mg": 3.12,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 140.0,
    "potassium_mg": 121.0,
    "protein_g": 11.5,
    "salt_g": 1.095,
    "sat_fat_g": 3.8,
    "sodium_mg": 438.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708282",
  "state": "Frozen",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "pretzels-snack-mix"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
