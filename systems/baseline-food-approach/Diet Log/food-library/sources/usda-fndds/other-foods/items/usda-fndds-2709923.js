/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Corn",
  "id": "usda-fndds-2709923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn, creamed",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 18.1,
    "energy_kcal": 72.0,
    "fat_g": 0.42,
    "fibre_g": 1.2,
    "folate_ug": 43.0,
    "iron_mg": 0.38,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 134.0,
    "protein_g": 1.74,
    "salt_g": 0.6525,
    "sat_fat_g": 0.065,
    "sodium_mg": 261.0,
    "sugar_g": 3.23,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709923",
  "state": "Unspecified",
  "subcategory": "Corn",
  "tags": [
    "corn",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
