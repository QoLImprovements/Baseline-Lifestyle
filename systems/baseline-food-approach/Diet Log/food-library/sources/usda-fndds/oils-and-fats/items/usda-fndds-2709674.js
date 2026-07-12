/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Carrots",
  "id": "usda-fndds-2709674",
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
      "gramsPerUnit": 235.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Carrots, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.68,
    "energy_kcal": 57.0,
    "fat_g": 2.64,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 0.42,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 31.0,
    "potassium_mg": 204.0,
    "protein_g": 0.8,
    "salt_g": 0.4825,
    "sat_fat_g": 0.944,
    "sodium_mg": 193.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 842.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 15.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709674",
  "state": "Frozen",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "frozen",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
