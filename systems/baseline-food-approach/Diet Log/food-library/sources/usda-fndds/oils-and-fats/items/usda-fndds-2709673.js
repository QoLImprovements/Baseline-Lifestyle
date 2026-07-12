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
  "id": "usda-fndds-2709673",
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
  "name": "Carrots, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 7.67,
    "energy_kcal": 64.0,
    "fat_g": 3.36,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 0.42,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 203.0,
    "protein_g": 0.78,
    "salt_g": 0.44,
    "sat_fat_g": 0.388,
    "sodium_mg": 176.0,
    "sugar_g": 4.07,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 17.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709673",
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
