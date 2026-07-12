/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna noodle casserole with vegetables and mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 13.0,
    "energy_kcal": 124.0,
    "fat_g": 4.46,
    "fibre_g": 1.0,
    "folate_ug": 30.0,
    "iron_mg": 1.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 94.0,
    "potassium_mg": 154.0,
    "protein_g": 8.11,
    "salt_g": 0.7,
    "sat_fat_g": 1.63,
    "sodium_mg": 280.0,
    "sugar_g": 1.49,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706718",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fungi",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
