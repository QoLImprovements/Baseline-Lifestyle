/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "box-net-weight-2-5-lb",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1134.0,
      "key": "box-net-weight-2-5-lb",
      "kind": "unit",
      "label": "box (net weight, 2.5 lb)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Turkey roast, boneless, frozen, seasoned, light and dark meat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 6.4,
    "energy_kcal": 502.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.1,
    "magnesium_mg": 20.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 158.0,
    "potassium_mg": 360.0,
    "protein_g": 17.6,
    "salt_g": 1.695,
    "sat_fat_g": 0.73,
    "sodium_mg": 678.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171503",
  "state": "Frozen",
  "subcategory": "Poultry Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
