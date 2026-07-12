/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-personal-size-pizza-5-7-diameter",
  "description": "Pizza",
  "id": "usda-fndds-2708618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 800.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 296.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 7.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 1184.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-piece-nfs",
      "kind": "unit",
      "label": "1 piece, NFS"
    }
  ],
  "name": "Pizza, cheese, stuffed crust",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 30.0,
    "energy_kcal": 274.0,
    "fat_g": 11.6,
    "fibre_g": 1.7,
    "folate_ug": 90.0,
    "iron_mg": 2.04,
    "magnesium_mg": 22.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 249.0,
    "potassium_mg": 229.0,
    "protein_g": 12.2,
    "salt_g": 1.5375,
    "sat_fat_g": 5.82,
    "sodium_mg": 615.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708618",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "milk-dairy-and-eggs",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
