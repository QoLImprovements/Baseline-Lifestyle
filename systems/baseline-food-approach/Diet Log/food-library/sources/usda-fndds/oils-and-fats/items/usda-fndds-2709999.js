/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-slice",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    }
  ],
  "name": "Summer squash, yellow or green, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 4.4,
    "energy_kcal": 46.0,
    "fat_g": 3.06,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 216.0,
    "protein_g": 1.18,
    "salt_g": 0.29,
    "sat_fat_g": 0.421,
    "sodium_mg": 116.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709999",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
