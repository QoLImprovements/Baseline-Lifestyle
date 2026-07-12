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
  "id": "usda-fndds-2706406",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sausage gravy",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 7.65,
    "energy_kcal": 180.0,
    "fat_g": 13.6,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.51,
    "magnesium_mg": 14.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 113.0,
    "potassium_mg": 194.0,
    "protein_g": 6.78,
    "salt_g": 1.0525,
    "sat_fat_g": 5.51,
    "sodium_mg": 421.0,
    "sugar_g": 3.92,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706406",
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
