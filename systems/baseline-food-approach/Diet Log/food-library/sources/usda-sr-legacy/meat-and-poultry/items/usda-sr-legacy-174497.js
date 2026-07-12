/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-with-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick without skin"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, drumstick, meat and skin, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 784.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.94,
    "magnesium_mg": 21.0,
    "omega3_g": 0.107,
    "phosphorus_mg": 177.0,
    "potassium_mg": 229.0,
    "protein_g": 22.7,
    "salt_g": 0.2775,
    "sat_fat_g": 2.94,
    "sodium_mg": 111.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174497",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
