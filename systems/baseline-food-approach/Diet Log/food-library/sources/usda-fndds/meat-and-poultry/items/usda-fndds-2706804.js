/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey salad, made with light mayonnaise-type salad dressing",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.76,
    "energy_kcal": 146.0,
    "fat_g": 8.15,
    "fibre_g": 0.4,
    "folate_ug": 14.0,
    "iron_mg": 0.44,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 206.0,
    "protein_g": 13.6,
    "salt_g": 1.3225,
    "sat_fat_g": 1.56,
    "sodium_mg": 529.0,
    "sugar_g": 2.73,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706804",
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
