/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork hash",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.96,
    "energy_kcal": 186.0,
    "fat_g": 13.7,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 0.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 146.0,
    "potassium_mg": 268.0,
    "protein_g": 12.9,
    "salt_g": 1.215,
    "sat_fat_g": 4.42,
    "sodium_mg": 486.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706766",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
