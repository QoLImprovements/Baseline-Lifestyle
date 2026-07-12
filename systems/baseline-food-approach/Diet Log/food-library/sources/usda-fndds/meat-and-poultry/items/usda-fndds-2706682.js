/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706682",
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
  "name": "Chicken or turkey, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 14.9,
    "energy_kcal": 130.0,
    "fat_g": 5.2,
    "fibre_g": 1.0,
    "folate_ug": 44.0,
    "iron_mg": 0.88,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 100.0,
    "protein_g": 6.13,
    "salt_g": 0.86,
    "sat_fat_g": 0.936,
    "sodium_mg": 344.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706682",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
