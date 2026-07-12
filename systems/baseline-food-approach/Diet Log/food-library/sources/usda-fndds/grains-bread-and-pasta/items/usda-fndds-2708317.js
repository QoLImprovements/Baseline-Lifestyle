/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708317",
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
      "gramsPerUnit": 35.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    }
  ],
  "name": "Waffle, whole grain, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 46.7,
    "energy_kcal": 289.0,
    "fat_g": 8.39,
    "fibre_g": 4.1,
    "folate_ug": 46.0,
    "iron_mg": 6.12,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 156.0,
    "protein_g": 6.78,
    "salt_g": 1.3225,
    "sat_fat_g": 1.35,
    "sodium_mg": 529.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708317",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "grains-bread-and-pasta",
    "pancakes-waffles-french-toast"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
