/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, soaked and boiled for 45-100 minutes",
  "id": "cofid-current-13-662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, chick peas, Kabuli, whole, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 18.3,
    "energy_kcal": 129.0,
    "fat_g": 3.0,
    "fibre_g": 10.6,
    "folate_ug": 35.0,
    "iron_mg": 1.9,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 281.0,
    "protein_g": 8.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.29,
    "sodium_mg": 1.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 2.24
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-662",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
