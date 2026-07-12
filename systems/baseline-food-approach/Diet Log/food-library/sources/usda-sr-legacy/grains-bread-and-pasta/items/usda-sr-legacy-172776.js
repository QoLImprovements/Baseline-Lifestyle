/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-poured-from-box",
      "kind": "unit",
      "label": "cup, poured from box"
    }
  ],
  "name": "Pancakes, whole-wheat, dry mix, incomplete",
  "nutritionPerBasis": {
    "calcium_mg": 449.0,
    "carbs_g": 71.0,
    "energy_kcal": 1440.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 82.0,
    "iron_mg": 7.84,
    "magnesium_mg": 104.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 782.0,
    "potassium_mg": 445.0,
    "protein_g": 12.8,
    "salt_g": 3.55,
    "sat_fat_g": 0.244,
    "sodium_mg": 1420.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172776",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
