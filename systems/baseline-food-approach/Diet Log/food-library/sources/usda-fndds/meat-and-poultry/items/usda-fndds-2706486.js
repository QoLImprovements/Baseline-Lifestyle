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
  "id": "usda-fndds-2706486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1408.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
    }
  ],
  "name": "Beef stroganoff with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 8.99,
    "energy_kcal": 129.0,
    "fat_g": 6.8,
    "fibre_g": 0.7,
    "folate_ug": 22.0,
    "iron_mg": 0.92,
    "magnesium_mg": 14.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 96.0,
    "potassium_mg": 151.0,
    "protein_g": 7.76,
    "salt_g": 0.79,
    "sat_fat_g": 2.44,
    "sodium_mg": 316.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706486",
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
