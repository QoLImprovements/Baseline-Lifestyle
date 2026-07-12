/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-patty-with-sauce-and-cheese",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-patty-with-sauce-and-cheese",
      "kind": "unit",
      "label": "1 patty with sauce and cheese"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "1-2-breast-with-sauce-and-cheese",
      "kind": "unit",
      "label": "1/2 breast with sauce and cheese"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "1-thigh-with-sauce-and-cheese",
      "kind": "unit",
      "label": "1 thigh with sauce and cheese"
    }
  ],
  "name": "Chicken or turkey parmigiana",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 8.3,
    "energy_kcal": 174.0,
    "fat_g": 8.34,
    "fibre_g": 0.8,
    "folate_ug": 18.0,
    "iron_mg": 1.01,
    "magnesium_mg": 21.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 178.0,
    "potassium_mg": 228.0,
    "protein_g": 16.2,
    "salt_g": 1.035,
    "sat_fat_g": 2.62,
    "sodium_mg": 414.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706442",
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
