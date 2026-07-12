/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar, with yogurt coating (General Mills Nature Valley Chewy Granola Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 74.3,
    "energy_kcal": 423.0,
    "fat_g": 11.4,
    "fibre_g": 4.4,
    "folate_ug": 126.0,
    "iron_mg": 1.03,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 168.0,
    "protein_g": 5.71,
    "salt_g": 0.6775,
    "sat_fat_g": 1.37,
    "sodium_mg": 271.0,
    "sugar_g": 40.0,
    "vitamin_a_ug": 475.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708092",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
