/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Weight Control Instant Oatmeal, banana bread",
  "nutritionPerBasis": {
    "calcium_mg": 243.0,
    "carbs_g": 64.4,
    "energy_kcal": 1510.0,
    "fat_g": 6.16,
    "fibre_g": 12.6,
    "folate_ug": 204.0,
    "iron_mg": 8.78,
    "magnesium_mg": 117.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 396.0,
    "potassium_mg": 327.0,
    "protein_g": 16.5,
    "salt_g": 1.5475,
    "sat_fat_g": 1.19,
    "sodium_mg": 619.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 2540.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173923",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
