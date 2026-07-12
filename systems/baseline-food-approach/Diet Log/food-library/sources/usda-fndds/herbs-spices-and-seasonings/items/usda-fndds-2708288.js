/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-pretzel-ns-as-to-size",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    }
  ],
  "name": "Pretzels, soft, gluten free, cinnamon sugar coated",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 63.8,
    "energy_kcal": 339.0,
    "fat_g": 8.14,
    "fibre_g": 3.8,
    "folate_ug": 18.0,
    "iron_mg": 1.54,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 32.0,
    "potassium_mg": 62.0,
    "protein_g": 3.1,
    "salt_g": 1.5775,
    "sat_fat_g": 3.68,
    "sodium_mg": 631.0,
    "sugar_g": 22.4,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708288",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "herbs-spices-and-seasonings",
    "pretzels-snack-mix",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
