/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products, including Balisto, Lion Bar, Picnic and Crispy Caramel",
  "id": "cofid-current-17-658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate covered bar with caramel and cereal",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 66.2,
    "energy_kcal": 501.0,
    "fat_g": 25.8,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 4.6,
    "magnesium_mg": 40.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 158.0,
    "potassium_mg": 329.0,
    "protein_g": 5.2,
    "salt_g": 0.4025,
    "sat_fat_g": 16.26,
    "sodium_mg": 161.0,
    "sugar_g": 46.4,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-658",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
