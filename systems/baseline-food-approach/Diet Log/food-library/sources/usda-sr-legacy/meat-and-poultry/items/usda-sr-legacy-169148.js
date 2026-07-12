/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 1867.0,
      "key": "roast-whole",
      "kind": "unit",
      "label": "roast whole"
    }
  ],
  "name": "Pork, cured, ham -- water added, whole, boneless, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.57,
    "energy_kcal": 117.0,
    "fat_g": 4.39,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.82,
    "magnesium_mg": 19.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 270.0,
    "potassium_mg": 316.0,
    "protein_g": 18.0,
    "salt_g": 2.975,
    "sat_fat_g": 1.42,
    "sodium_mg": 1190.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169148",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
