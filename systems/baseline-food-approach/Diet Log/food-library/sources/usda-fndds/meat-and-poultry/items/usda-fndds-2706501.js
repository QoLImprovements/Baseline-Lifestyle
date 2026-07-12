/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef wellington",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 10.2,
    "energy_kcal": 368.0,
    "fat_g": 27.4,
    "fibre_g": 0.4,
    "folate_ug": 32.0,
    "iron_mg": 3.41,
    "magnesium_mg": 21.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 170.0,
    "potassium_mg": 274.0,
    "protein_g": 19.2,
    "salt_g": 0.455,
    "sat_fat_g": 9.56,
    "sodium_mg": 182.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706501",
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
