/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sausage, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 12.8,
    "energy_kcal": 128.0,
    "fat_g": 7.12,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.43,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 53.0,
    "potassium_mg": 237.0,
    "protein_g": 3.78,
    "salt_g": 0.88,
    "sat_fat_g": 1.73,
    "sodium_mg": 352.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706644",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
